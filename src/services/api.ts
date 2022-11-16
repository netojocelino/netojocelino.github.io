const URLS = {
    main: './data.json',
}

const api = {
    about: async () => {
        const response = await fetch(URLS.main);

        if (!response.ok) {
            throw Error(`[${response.status}] HTTP Error!`)
        }

        const data = await response.json()

        const header = {
            title: data.name,
            role: data.role,
            status: data.professional.status,
        }

        const contacts = data.contact

        const experiences = data.company.map((experience: any) => {
            const getMonthString = [
                'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez',
            ]
            const startAt = new Date(experience.startAt.toString())
            const endAt = new Date(experience.ends.toString())

            const startedYearAt = startAt.getUTCFullYear()
            const startedMonthAt = getMonthString[startAt.getUTCMonth()]

            const endedYearAt = endAt.getUTCFullYear()
            const endedMonthAt = getMonthString[endAt.getUTCMonth()]

            experience.workForLong =  `${experience.location} — ${startedMonthAt} de ${startedYearAt} - ${endedMonthAt} ${endedYearAt}`

            return experience
        } )

        const repoitems = data.repositories.map((repo: any) => ({
            title: repo.name,
            description: repo.description,
            anchorTo: repo.html_url,
            anchorTitle: repo.name,

        }))

        return {
            header,
            contacts,
            experiences,
            repoitems,
        }
        

    }
}


export default api
