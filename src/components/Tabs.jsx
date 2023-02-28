const TabPanel = ({ children }) => {
    return <div style={{ padding: '10px' }}>{children}</div>;
};

const Tab = ({ title, isActive, onClick }) => {
    return (
        <div
            style={{
                padding: '10px',
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: isActive ? 'underline' : 'none',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            {title}
        </div>
    );
};

const Tabs = ({ tabs, activeTab, onChange }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        title={tab.title}
                        isActive={activeTab === index}
                        onClick={() => onChange(index)}
                    />
                ))}
            </div>
            <div>
                <TabPanel>{tabs[activeTab].content}</TabPanel>
            </div>
        </div>
    );
};

export default Tabs;