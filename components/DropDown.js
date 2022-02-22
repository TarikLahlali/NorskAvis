import dropDownStyles from "../styles/DropDown.module.css";

const DropDown = ({ open }) => {
  return (
    <div
      className={
        open
          ? dropDownStyles.container + " " + dropDownStyles.active
          : dropDownStyles.container
      }
    >
      <div className={dropDownStyles.wrapper}>
        <div className={dropDownStyles.menuGroup}> DropDown </div>
        <div className={dropDownStyles.menuInfo}>
          <ul className={dropDownStyles.logginWrapper}>
            <button className={dropDownStyles.logginButton}>Logg inn</button>
            <ul>
              <li>
                <a href="">Bli abonnent</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Min side</a>
              </li>
              <li>
                <a href="">A-kortet</a>
              </li>
              <li>
                <a href="">Mine leste artikler</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
