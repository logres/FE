import useState from 'react';
import Tabs from './Tabs';


const BackGround = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'Tab 1',
            content: 'This is the content for Tab 1',
        },
        {
            title: 'Tab 2',
            content: 'This is the content for Tab 2',
        },
        {
            title: 'Tab 3',
            content: 'This is the content for Tab 3',
        },
    ];

    return (
        <div>
            <h1>My Tabs Component</h1>
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
    );
};

export default BackGround;