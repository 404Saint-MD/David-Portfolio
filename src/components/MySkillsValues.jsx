function MySkillsValues({skills}){
    return(
        <>
        
        {
            skills.map((skill) =>  ( <div key={skill.name}><p>{skill.name} - {skill.level}%
</p><div className="w-full h-4 bg-gray-800 rounded-full mt-2">
  <div
    className="h-4 bg-orange-500 rounded-full"
    style={{ width: `${skill.level}%` }}
  ></div>
</div></div>))
         
        }</>
    );
}

export default MySkillsValues;