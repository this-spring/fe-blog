function divDom() {
  return (
    <div id="xxq" class="divClass">
      this is div
      <span>this is span</span>
    </div>
  )
}

function Counter() {
  const [state, setState] = Didact.useState(1)
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  )
}