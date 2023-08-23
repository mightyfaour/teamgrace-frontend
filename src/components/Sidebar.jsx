
import { Link } from "react-router-dom";

import "./reusables.css";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
// import Product from "../assets/icons/product.svg";
import Stack from "./icons/Stack.svg";
import Document from "./icons/Document.svg";
import Settings from "./icons/Settings-alt.svg";
import like from "./icons/Like.png";
import Edit from "./icons/Edit.svg";
import Processor from "./icons/Processor.svg"
import Key from "./icons/Key.svg";
import Desktop from "./icons/Desktop.svg";
import Wallet from "./icons/Wallet.svg";
import Coin from "./icons/coin.svg";
import Server from "./icons/Server.svg"
import Export from "./icons/export.svg"




const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="side_link">
				<BsPerson className="icon" />
				<Link to="/dashboard">
					<p className="link">Account</p>
				</Link>
			</div>
			<div className="side_link">
				<MdOutlinePrivacyTip className="icon"/>
				<Link to="/dashboard/privacy" className="link">
					<p className="link">
						Privacy & GDPR
					</p>
				</Link>
			</div>
			<div className="side_link">
				<img src={Stack} alt="Custom Branding" className="icon"/>
				<Link to="/dashboard/custom-branding" >
					<p className="link">Custom Branding</p>
				</Link>
			</div>
			<div className="side_link">
				<img src={Document} alt="Templates" />
				<Link to="/dashboard/template-email" className="link">Template email / SMS</Link>
			</div>
			<div className="side_link">
				<img src={Settings} alt="Default Settings" />
				<Link to="/dashboard/default-settings" className="link">Default Settings</Link>
			</div>
			<div className="side_link">
				<img src={like} alt="Ratting Settings" height={30} width={30}/>
				<Link to="/dashboard/rating-settings" className="link">Rating Settings</Link>
			</div>
			<div className="side_link">
				<img src={Edit} alt="Single Sign On" />
				<Link to="/dashboard/single-sign" className="link">Single Sign On</Link>
			</div>
			<hr />
			<div className="side_link">
				<img src={Processor} alt="Integration" />
				<Link to="/dashboard/integration" className="link">Integration</Link>
			</div>
			<div className="side_link">
				<img src={Key} alt="API Keys" />
				<Link to="/dashboard/apikeys" className="link">API ApiKeys</Link>
			</div>
			<div className="side_link">
				<img src={Desktop} alt="Webhooks" />
				<Link to="/dashboard/webhooks" className="link">Webhooks</Link>
			</div>
			<hr />
			<div className="side_link">
				<img src={Wallet} alt="Plan&Usage" />
				<Link to="/dashboard/planusage" className="link">Plan & Usage</Link>
			</div>
			<div className="side_link">
				<img src={Coin} alt="Billing" />
				<Link to="/dashboard/billing" className="link">Billing</Link>
			</div>
			<div className="side_link">
				<img src={Server} alt="Team Management" />
				<Link to="/dashboard/teammag" className="link">Team Management</Link>
			</div>
			<div className="side_link">
				<img src={Export} alt="Upgrade" />
				<Link to="/dashboard/upgrade" className="link">Upgrade</Link>
			</div>

		</div>
	);
};

export default Sidebar;
