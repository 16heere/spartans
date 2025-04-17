function addIds(players) {
    return players.map((player, index) => ({
        ...player,
        id: index + 1,
    }));
}

const initialPlayers = [
    {
        firstName: "Chris",
        lastName: "Boateng",
        number: 2,
        position: "Point Guard",
        height: "5'11",
        weight: "69KG",
        wingspan: "6'5",
        standingReach: "7'7",
        nationality: "Ghanaian/English",
        hometown: "Gravesend",
        bio: {
            description:
                "Chris is an extremely shifty PG with elite handles and the ability to score in volume. He plays with excellent pace in transition and excels at coming off screens or handoff situations. He is a creative player who has a deep understanding of the game and is a coach’s dream to work with. Chris lives in the gym and thrives in competitive environments.",
            points: 100,
            rebounds: 100,
            assist: 100,
            steals: 100,
            fg: 100,
            three: 100,
            freethrow: 100,
        },
        image: "/assets/players/chris-boateng.jpg",
        teams: ["mens", "u19"],
        videos: ["-kE-LpXoKqU", "phCG5zJFwbc", "0Hef-K4_1r8"],
        playlistId: "PLo8udBlGyZugAmyjw5ydv1mjJt662E_v7",
        sat: 1210,
        stats: [
            {
                year: 2023,
                pointsPerGame: 17.7,
                fieldGoalPercentage: "42.1%",
                threePointPercentage: "24.0%",
                assistsPerGame: 4.1,
                reboundsPerGame: 5.7,
                stealsPerGame: 3.9,
            },
            {
                year: 2022,
                pointsPerGame: 17.0,
                fieldGoalPercentage: "37.0%",
                threePointPercentage: "25.0%",
                assistsPerGame: 2.5,
                reboundsPerGame: 6.5,
                stealsPerGame: 4.0,
            },
        ],
        currentSeasonStats: {
            teams: {
                Mens: {
                    pointsPerGame: 17.2,
                    fieldGoalPercentage: "41.4%",
                    threePointPercentage: "29.8%",
                    assistsPerGame: 3.6,
                    reboundsPerGame: 4.1,
                    stealsPerGame: 3.2,
                },
                Academy: {
                    pointsPerGame: 21.4,
                    fieldGoalPercentage: "42.1%",
                    threePointPercentage: "29.7%",
                    assistsPerGame: 4.8,
                    reboundsPerGame: 6.1,
                    stealsPerGame: 4.1,
                },
            },
        },
        honors: [
            { title: "Royals Classic Champion", year: "2023, 2024 & 2025" },
            {
                title: "Royals Classic All-Tournament Team",
                year: "2023, 2024 & 2025",
            },
            { title: "Royals Classic MVP", year: "2024 & 2025" },
            { title: "Kent County League Champion", year: "2022/23 & 2023/24" },
            { title: "Kent County League Finals MVP", year: "2022/23" },
            {
                title: "NBL U18 South East Conference Champion",
                year: "2023/24",
            },
            { title: "Senior Academy MVP", year: "2022/23" },
            {
                title: "Senior Academy ‘Chris Morgan’ Impact Award",
                year: "2023/24",
            },
        ],
        profile: true,
        class: 2025,
        born: "05",
    },
    {
        firstName: "Oluwagbuyi",
        lastName: "Eribake",
        number: 21,
        position: "Guard",
        height: "6'3",
        weight: "77KG",
        wingspan: "6'8",
        standingReach: "8'2",
        nationality: "German/Nigerian/English",
        hometown: "Kent",
        bio: {
            description:
                "Olu is an outstanding athlete who plays above his size and can score at all three levels. He is an elite-level shooter and has the intelligence to thrive in any offense. Defensively, he can guard multiple positions, is tenacious on the ball, and leads the team in rebounds per game. Olu has a great work ethic, is hungry to develop, and is a leader on and off the court.",
            points: 100,
            rebounds: 100,
            assist: 100,
            steals: 100,
            fg: 100,
            three: 100,
            freethrow: 100,
        },
        image: "/assets/players/olu-eribake.jpg",
        teams: ["mens", "u19"],
        videos: ["XN6rhGXRAgk", "ksMqd1ugWHo", "SoCkOu6bm28"],
        playlistId: "PLo8udBlGyZugSnNx9O1ZiGmQ2J6a0ssV6",
        sat: 1280,
        stats: [
            {
                year: 2023,
                pointsPerGame: 20.5,
                fieldGoalPercentage: "42.9%",
                threePointPercentage: "29.3%",
                assistsPerGame: 2.5,
                reboundsPerGame: 13.4,
                stealsPerGame: 3.7,
            },
            {
                year: 2022,
                pointsPerGame: 16.2,
                fieldGoalPercentage: "37.9%",
                threePointPercentage: "19.4%",
                assistsPerGame: 2.3,
                reboundsPerGame: 15.4,
                stealsPerGame: 3.0,
            },
        ],
        currentSeasonStats: {
            teams: {
                Mens: {
                    pointsPerGame: 14.3,
                    fieldGoalPercentage: "42.5%",
                    threePointPercentage: "27.3%",
                    assistsPerGame: 2.2,
                    reboundsPerGame: 9.9,
                    stealsPerGame: 2.2,
                },
                Academy: {
                    pointsPerGame: 16.9,
                    fieldGoalPercentage: "45.1%",
                    threePointPercentage: "22.4%",
                    assistsPerGame: 2.0,
                    reboundsPerGame: 7.9,
                    stealsPerGame: 3.9,
                },
            },
        },
        honors: [
            { title: "Royals Classic Champion", year: "2023, 2024 & 2025" },
            {
                title: "Royals Classic All-Tournament Team",
                year: "2023, 2024 & 2025",
            },
            { title: "Royals Classic MVP", year: "2023" },
            { title: "Kent County League Champion", year: "2022/23 & 2023/24" },
            {
                title: "NBL U18 South East Conference Champion",
                year: "2023/24",
            },
            { title: "Senior Academy MVP", year: "2023/24" },
            {
                title: "Senior Academy MIP",
                year: "2022/23",
            },
        ],
        profile: true,
        class: 2025,
        born: "05",
    },
];

const Players = addIds(initialPlayers);

export { Players };
