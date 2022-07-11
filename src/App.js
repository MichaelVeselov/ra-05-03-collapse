import Collapse from './components/Collapse';

function App() {
  return (
    <>
      <Collapse collapsedLabel='Collapsed Label' expandedLabel='Expanded Label'>
        <p>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger. Some placeholder content for the collapse component. This
          panel is hidden by default but revealed when the user activates the
          relevant trigger. Some placeholder content for the collapse component.
          This panel is hidden by default but revealed when the user activates
          the relevant trigger. Some placeholder content for the collapse
          component. This panel is hidden by default but revealed when the user
          activates the relevant trigger.
        </p>
      </Collapse>
      <Collapse>
        <p>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger. Some placeholder content for the collapse component. This
          panel is hidden by default but revealed when the user activates the
          relevant trigger. Some placeholder content for the collapse component.
          This panel is hidden by default but revealed when the user activates
          the relevant trigger. Some placeholder content for the collapse
          component. This panel is hidden by default but revealed when the user
          activates the relevant trigger.
        </p>
      </Collapse>
    </>
  );
}

export default App;
