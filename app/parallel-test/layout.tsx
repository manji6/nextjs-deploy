
//export default function Layout(props) { と書くと型指定がないのでエラーが出る。呼び出しているnodeはReactNodeという型なので指定
type Props = {
  children: React.ReactNode,
  node1: React.ReactNode,
  node2: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div>
      <div>{props.children}</div>
      <div>{props.node1}</div>
      <div>{props.node2}</div>
    </div>
  )
}