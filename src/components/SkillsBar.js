function SkillsBar(props) {
  return (
    <div className="m-10">
      <div>
        <div className="flex flex-row">
          <img src={props.info.avatar} className="mr-2" />
          <h4 className="text-2xl font-semibold">{props.info.name}</h4>
        </div>
        <p>{props.info.description}</p>
      </div>
    </div>
  );
}

export default SkillsBar;
