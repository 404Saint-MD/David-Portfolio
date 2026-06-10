function MyExperience({experiences}){
    return(
        <>
<main className="mt-20">
     <h2 className="text-5xl font-black mb-10">
        EXPERIENCE
      </h2>
        {
             
            experiences.map((experience) =>(<div key={experience.number} className="border-1-2 border-orange-500 font-bold pl-6 mb-8 ">
                <h3 className="text-2xl font-bold mt-2" >{experience.role}</h3>
                <p className="text-gray-400">{experience.company}</p>
                <p className="text-gray-500 font-bold">{experience.timeline}</p>
            </div>))
        }
        </main>
        </>
    )
}
export default MyExperience;