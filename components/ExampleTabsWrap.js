import '@animxyz/core'

const ExampleTabsWrap = () => {
  return (
<div className="example-tabs-wrap">
  <XyzTransitionGroup
    className="example-tabs"
    appear
    duration="auto"
    xyz="fade flip-down origin-bottom stagger-1 delay-5"
  >
    {tabs.map(tab => (
      <button
        className={`example-tab ${tab === activeTab && 'active'}`}
        onClick={() => setActiveTab(tab)}
        key={tab}
      >
        {tab}
      </button>
    ))}
  </XyzTransitionGroup>

  <div
    xyz={xyz(
      'fade appear-short-100% origin-top ease-in-out duration-7',
      tabDirectionXyz
    )}
  >
    <XyzTransition appear>
      <div
        className="example-tab-contents xyz-out-absolute"
        key={activeTab}
      >
        {`xyz="${tabDirectionXyz}"`}
      </div>
    </XyzTransition>
  </div>
</div>
  )
}

export default ExampleTabsWrap
