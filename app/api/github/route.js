export const revalidate = 3600

const USERNAME = 'nicopetito'

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
}

export async function GET() {
  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed&type=public`,
      { headers }
    )

    if (!reposRes.ok) {
      return Response.json({ error: 'GitHub API error' }, { status: reposRes.status })
    }

    const allRepos = await reposRes.json()
    const activeRepos = allRepos.filter((r) => !r.fork && !r.archived)

    // Latest 3 repos for Bloque A
    const repos = activeRepos.slice(0, 3).map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
      url: r.html_url,
    }))

    // Aggregate language bytes across all active repos for Bloque C
    const langBytes = {}
    await Promise.all(
      activeRepos.map(async (repo) => {
        const res = await fetch(
          `https://api.github.com/repos/${USERNAME}/${repo.name}/languages`,
          { headers }
        )
        if (!res.ok) return
        const data = await res.json()
        for (const [lang, bytes] of Object.entries(data)) {
          langBytes[lang] = (langBytes[lang] || 0) + bytes
        }
      })
    )

    const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0)
    const languages = Object.entries(langBytes)
      .map(([name, bytes]) => ({ name, percent: Math.round((bytes / totalBytes) * 1000) / 10 }))
      .sort((a, b) => b.percent - a.percent)
      .slice(0, 5)

    return Response.json({ repos, languages })
  } catch {
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
