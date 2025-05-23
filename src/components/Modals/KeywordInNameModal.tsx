import Button from 'components/Button'
import { BodyText, Header2 } from 'components/Text'
import DefaultModal from 'components/Modals/DefaultModal'
import ButtonTypes from 'type/Button'
import { DefaultModalProps } from 'type/Props'
import UserAtom from 'helpers/atoms/UserAtom'
import { useAtomValue } from 'jotai'
import { useCallback, useState } from 'react'
import TaskRewardBlock from 'components/Tasks/TaskRewardBlock'
import { successConfetti } from 'helpers/shootConfetti'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Copy from 'components/icons/Copy'
import { getDailyNickname } from 'helpers/api/dailyReward'
import handleError from 'helpers/handleError'
import { nameKeyword } from 'helpers/atoms/UserStates'
import { miniApp } from '@telegram-apps/sdk-react'
import CheckMark from 'components/icons/CheckMark'

function ModalBody() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-4 px-4 h-44 w-44 rounded-lg object-cover self-center ">
        <span className="text-9xl leading-[1.05]">🌀</span>
        <TaskRewardBlock rewardAmount={2000} />
      </div>
      <Header2 className="px-4 text-balance">
        Add {nameKeyword} to your name
      </Header2>
      <BodyText className="text-balance px-4">
        Please note, that you need to wait a bit and re-open the app after you
        change your name
      </BodyText>
    </>
  )
}

function ModalFooter() {
  const [parent] = useAutoAnimate()
  const [loading, setLoading] = useState(false)
  const user = useAtomValue(UserAtom)
  const [disabled, setDisabled] = useState(!user?.nicknameClaimAvailable)

  const onClick = useCallback(async () => {
    if (!user) return
    try {
      setLoading(true)

      if (
        !user.firstName.includes(nameKeyword) &&
        !user.lastName?.includes(nameKeyword)
      ) {
        const e = `You don't have ${nameKeyword} in your name`
        handleError({ e, toastMessage: e })
        return
      }

      await getDailyNickname()
      await successConfetti()
      setDisabled(true)
    } catch (e) {
      handleError({
        e,
        toastMessage: 'Failed to claim your reward 😥 Please try again',
      })
    } finally {
      setLoading(false)
    }
  }, [user])

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(nameKeyword)
    miniApp.close()
  }, [])

  return (
    <div className="flex flex-col gap-y-4" ref={parent}>
      <Button
        onClick={onCopy}
        buttonType={ButtonTypes.secondary}
        iconRight={<Copy />}
      >
        Copy and close the app
      </Button>
      <Button
        buttonType={ButtonTypes.neutral}
        isLoading={loading}
        onClick={onClick}
        iconRight={disabled ? <CheckMark /> : null}
      >
        {disabled ? 'Done' : 'Check task'}
      </Button>
    </div>
  )
}

export default function (props: DefaultModalProps) {
  return <DefaultModal {...props} body={ModalBody} footer={ModalFooter} />
}
