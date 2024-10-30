import Button from 'components/Button'
import { BodyText, Header2 } from 'components/Text'
import DefaultModal from 'components/Modals/DefaultModal'
import ButtonTypes from 'type/Button'
import { DefaultModalProps } from 'type/Props'
import ImageAnimatedOnLoad from 'components/ImageAnimatedOnLoad'

function ModalBody() {
  return (
    <>
      <ImageAnimatedOnLoad src="img/collabs/triangle_meme.png" forModal />
      <Header2 className="text-center">Triangle Accelerator Incubated</Header2>
      <BodyText className="text-center text-balance">
        Scalr is a member of the Triangle Accelerator and Ecosystem.
      </BodyText>
      <BodyText className="text-center text-white/50 text-balance">
        TON Foundation, 1inch, Notcoin, OKX Ventures, HashKey Capital, Blum,
        LayerZero, STON.fi, Animoca Brands.
      </BodyText>
    </>
  )
}

function ModalFooter({ onClose }: { onClose: () => void }) {
  return (
    <Button
      buttonType={ButtonTypes.secondary}
      className="!rounded-full"
      onClick={onClose}
    >
      Impressive Achievement! 💪
    </Button>
  )
}

export default function (props: DefaultModalProps) {
  return (
    <DefaultModal
      {...props}
      bodyWrapperClassName="min-h-[70vh]"
      body={ModalBody}
      footer={(onClose) => <ModalFooter onClose={onClose} />}
    />
  )
}
