import {ReactNode, useEffect, useState} from "react";

interface PortalProps {
  children: ReactNode
}

export const Portal = ({children}: PortalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'))

    const element = document.createElement('div')

    modalRoot?.appendChild(element)

    return () => {
      modalRoot?.removeChild(element)
    }
  })

  return (<>{children}</>)
}
