import { Link } from "react-router-dom";

import styles from "./Logo.module.css";
import logo from "/logos/home-bot-icon.png";

const Logo = () => {
	return (
		<div className={styles.parent}>
				<Link to={"/"}>
					<img src={logo} alt='logo' className={styles.logo} />
				</Link>
				<p className="text-2xl font-bold">MEDI <span className="text-[#05101c]">BOT</span></p>
		</div>
	);
};

export default Logo;
