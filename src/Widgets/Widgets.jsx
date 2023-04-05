import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
import Search from "@mui/icons-material/Search";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-search-icon">
                <Search className="widgets-search-input" />
                <input type={"text"} placeholder="Search Twitter"/>
            </div>
            <div className="widgets-container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId = {"1638384880756350979"} />

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "Developer"
                    options = {{ height: 400 }}
                />

                <TwitterShareButton 
                    url = {"https://www.facebook.com/newtonschool.co"}
                    options={{
                        text: "Learn with Newton School team",
                        via: "NS Team"
                    }}
               />
            </div>
        </div>
    );
 };

export default Widgets;