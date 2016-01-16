export default (state) => (
  <div>
    <p>This app weighs about 8.5kb</p>
    <button data-click={{type: 'decrement'}}> - </button>
    <span> {state.count} </span>
    <button data-click={{type: 'increment'}}> + </button>
    <hr />
    <button data-click={{type: 'addDomNodes', payload: {amount: 100}}}>add 100+ DOM nodes(added:{state.messages.length})</button>
    <hr />
    {state.messages.map((msg) => <div>{msg}</div>)}
  </div>
)
