export default function Layout(props: any) {
  return (
    <div>
      <div>{props.children}</div>
      <div>{props.node1}</div>
      <div>{props.node2}</div>
    </div>
  )
}