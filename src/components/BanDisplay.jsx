export default function ban({ grid, bans, animationClasses }) {
    const { gridBlue, gridRed } = grid;
    const { blue: blueBans, red: redBans } = bans;
    const { blue: animationBlueClass, red: animationRedClass } = animationClasses;
    
    const ban1Ids = [1, 2, 3, 4, 5]
    const ban2Ids = [6, 7, 8, 9, 10]

    const renderBans = (Ids, bans, animationClass) => {
        return Ids.map((id) => (
            <div key={id}>
                <div className="bg-[url('/src/assets/Ban.png')] bg-gray-300 bg-cover bg-center grayscale-100 w-16 h-16 overflow-hidden" key={id}>
                    <img className={`grayscale-100 h-full object-cover ${animationClass[(id - 1) % 5]}`} src={bans[(id - 1) % 5].img} alt=""/>
                </div>
            </div>
        ))
    }

    return (
        <>
            <div className={`flex ${gridBlue}`}>
                {renderBans(ban1Ids, blueBans, animationBlueClass)}
            </div>
            <div className={`flex flex-row-reverse ${gridRed}`}>
                {renderBans(ban2Ids, redBans, animationRedClass)}
            </div>
        </>
    )
}
