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
        },
        image: "/assets/players/chris-boateng.jpg",
        teams: ["mens", "u19"],
        videos: ["-kE-LpXoKqU", "phCG5zJFwbc", "0Hef-K4_1r8", "6ARACx6Un6s"],
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
            {
                title: "U19 Kent County League Champion",
                year: "2022/23, 2023/24 & 2024/25",
            },
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
        },
        image: "/assets/players/olu-eribake.jpg",
        teams: ["mens", "u19"],
        videos: ["XN6rhGXRAgk", "ksMqd1ugWHo", "SoCkOu6bm28", "dYFiZZkPhdA"],
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
            {
                title: "U19 Kent County League Champion",
                year: "2022/23, 2023/24 & 2024/25",
            },
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
    {
        firstName: "Brian",
        lastName: "Olivers",
        number: 23,
        position: "Guard",
        height: "6'2",
        weight: "",
        wingspan: "",
        standingReach: "",
        nationality: "Nigerian/English",
        hometown: "Kent",
        bio: {
            description:
                "Brian is an elite level defender that can guard 1-3 and thrives within many different systems. He is intelligent on and off the ball with the ability to make plays and create offence is transition. He communicates effectively, understands advanced coverages and rotations, and is smart with a scout report. Brian plays with great physicality at the guard spot on offence, can stretch the floor with his shooting and provides value as a slashing threat. He is gritty, tough and competitive, holding high standards for himself and teammates and always contributing towards great practices.",
        },
        image: "/assets/players/brian-olivers.jpg",
        teams: ["mens", "u19"],
        videos: ["a5IAqAuWVvs"],
        playlistId: "",
        sat: null,
        stats: [
            {
                year: 2023,
                pointsPerGame: 16.2,
                fieldGoalPercentage: "32.4%",
                threePointPercentage: "16.3%",
                assistsPerGame: 2.3,
                reboundsPerGame: 4.4,
                stealsPerGame: 2.1,
            },
            {
                year: 2022,
                pointsPerGame: 5.2,
                fieldGoalPercentage: "29.6%",
                threePointPercentage: "18.2%",
                assistsPerGame: 1.4,
                reboundsPerGame: 2.4,
                stealsPerGame: 1.1,
            },
        ],
        currentSeasonStats: {
            teams: {
                Academy: {
                    pointsPerGame: 18.2,
                    fieldGoalPercentage: "42.3%",
                    threePointPercentage: "22.3%",
                    assistsPerGame: 2.0,
                    reboundsPerGame: 6.9,
                    stealsPerGame: 3.3,
                },
            },
        },
        honors: [
            {
                title: "Senior Academy MVP",
                year: "2024/2025",
            },
            { title: "Royals Classic Champion", year: "2023, 2024 & 2025" },
            {
                title: "Royals Classic All-Tournament Team",
                year: "2023/24",
            },
            {
                title: "U19 Kent County League Champion",
                year: " 2023/24 & 2024/25",
            },
            {
                title: "U16 Kent County League Champion",
                year: " 2022/23",
            },
            { title: "U16 Kent County League Finals MVP", year: "2022/23" },
            {
                title: "NBL U18 South East Conference Champion",
                year: "2023/24 & 2024/25",
            },
            {
                title: "Senior Academy DPOY",
                year: "2023/24",
            },
        ],
        profile: true,
        class: 2025,
        born: "07",
    },
    {
        firstName: "Daniel",
        lastName: "Adeyemi",
        number: 3,
        position: "Wing",
        height: "6'5",
        weight: "",
        wingspan: "",
        standingReach: "",
        nationality: "Nigerian/English",
        hometown: "Kent",
        bio: {
            description:
                "Daniel can play the 3-5 spot and regularly guards above his size on defence. He knows how to add value to the team with his rebounding and interior play and is fantastic with the intangibles. He's a high-IQ screener, has a solid post game and can trigger actions off of the handoff. Dan has worked hard to extend his offence to the 3-point line and shows high potential as a wing with his height and physicality.",
        },
        image: "/assets/players/daniel-adeyemi.jpg",
        teams: ["mens", "u19"],
        videos: [],
        playlistId: "",
        sat: null,
        stats: [
            {
                year: 2023,
                pointsPerGame: 5.0,
                fieldGoalPercentage: "43.4%",
                threePointPercentage: "24.3%",
                assistsPerGame: 0.6,
                reboundsPerGame: 5.7,
                stealsPerGame: 0.9,
            },
        ],
        currentSeasonStats: {
            teams: {
                Academy: {
                    pointsPerGame: 9.4,
                    fieldGoalPercentage: "38.7%",
                    threePointPercentage: "19.1%",
                    assistsPerGame: 1.3,
                    reboundsPerGame: 8.6,
                    stealsPerGame: 2.3,
                },
            },
        },
        honors: [
            { title: "Royals Classic Champion", year: "2024 & 2025" },
            {
                title: "U19 Kent County League Champion",
                year: " 2023/24 & 2024/25",
            },
            {
                title: "NBL U18 South East Conference Champion",
                year: "2023/24 & 2024/25",
            },
            {
                title: "Senior Academy Sixth Man",
                year: "2023/24",
            },
        ],
        profile: true,
        class: 2025,
        born: "06",
    },
    {
        firstName: "Khalid",
        lastName: "Sanusi",
        number: 77,
        position: "Guard",
        height: "6'1",
        weight: "",
        wingspan: "",
        standingReach: "",
        nationality: "Nigerian/English",
        hometown: "Kent",
        bio: {
            description:
                "Khalid is a high-volume scorer who can play at all three levels. He is aggressive off of the drive, loves playing through contact and converts well at the line. His attacking mindset creates space for teammates and he can be used as a key advantage creator. Khalid is developing well as a combo guard and continues to grow his intelligence, poise and decision-making. Defensively, Khalid shows tenacity and moves well, with the ability to make defensive plays on the floor and at the rim.",
        },
        image: "/assets/players/khalid-sanusi.jpg",
        teams: ["u19"],
        videos: ["fdbEjixo-Ic"],
        playlistId: "",
        sat: null,
        stats: [],
        currentSeasonStats: {
            teams: {
                Academy: {
                    pointsPerGame: 16.3,
                    fieldGoalPercentage: "38.2%",
                    threePointPercentage: "20.7%",
                    assistsPerGame: 1.7,
                    reboundsPerGame: 7.4,
                    stealsPerGame: 4.0,
                },
            },
        },
        honors: [
            { title: "Royals Classic Champion", year: "2025" },
            {
                title: "Royals Classic All-Tournament Team",
                year: "2024/25",
            },
            {
                title: "U19 Kent County League Champion",
                year: "2024/25",
            },
            {
                title: "NBL U18 South East Conference Champion",
                year: "2024/25",
            },
        ],
        profile: true,
        class: 2026,
        born: "08",
    },
];

const Players = addIds(initialPlayers);

export { Players };
