import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'aaron1-z'
    
    const targetRepos = [
      'Nexora',
      'CUSTOM_BLOCKCHAIN-LMS',
      'Qubit-Quest',
      'Vortex-ai',
      'tp_turbo_backend',
      'Intentio',
      'Chatverse-Translator',
      'Plant_Detection_Mini_Project',
      'LearnStream',
      'riide-token',
      'aws-gamejam',
      'demo_proc_dapp',
      'QPolandGlobalHackaton_2024_submission',
      'flight-optimization',
      'QGhostBusters',
      'AR-concert'
    ]

    const customDescriptions: { [key: string]: string } = {
      'Nexora': 'Your intelligence brief in minutes, Structured output from the Nexora Intelligence Engine.',
      'CUSTOM_BLOCKCHAIN-LMS': 'A blockchain-based Learning Management System with decentralized credential verification and smart contract integration.',
      'Qubit-Quest': 'Quantum computing exploration project featuring quantum algorithms and circuit simulations.',
      'Vortex-ai': 'Advanced AI-powered application leveraging machine learning for intelligent data processing and analysis.',
      'tp_turbo_backend': 'High-performance backend system built with modern technologies for scalable application architecture.',
      'Intentio': 'Intent-based application framework designed for intelligent user interaction and automation.',
      'Chatverse-Translator': 'Real-time multilingual translation system with advanced NLP capabilities for seamless communication.',
      'Plant_Detection_Mini_Project': 'Machine learning project for automated plant species identification using computer vision techniques.',
      'LearnStream': 'Interactive learning platform with streaming capabilities for educational content delivery.',
      'riide-token': 'Blockchain token implementation with smart contract functionality for decentralized applications.',
      'aws-gamejam': 'Game development project created for AWS GameJam competition with cloud-native architecture.',
      'demo_proc_dapp': 'Demonstration decentralized application showcasing blockchain integration and Web3 technologies.',
      'QPolandGlobalHackaton_2024_submission': 'Hackathon submission for QPoland Global Hackathon 2024 featuring innovative quantum computing solutions.',
      'flight-optimization': 'Algorithmic solution for flight route optimization using advanced computational methods.',
      'QGhostBusters': 'Quantum-themed game project combining quantum computing concepts with interactive gameplay.',
      'AR-concert': 'Augmented reality concert experience application for immersive live event interactions.'
    }

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }

    const repos = await response.json()
    
    const repoMap = new Map()
    repos.forEach((repo: any) => {
      if (targetRepos.includes(repo.name) && !repo.fork) {
        repoMap.set(repo.name, repo)
      }
    })

    const formattedRepos = targetRepos
      .filter(name => repoMap.has(name))
      .map((name) => {
        const repo = repoMap.get(name)
        const description = customDescriptions[name] || repo.description || `Innovative ${name} project showcasing advanced technology solutions.`
        return {
          id: repo.id,
          name: repo.name,
          description: description,
          url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
        }
      })

    return NextResponse.json({ repos: formattedRepos })
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}

