import layoutStyles from '@src/styles/layout.module.css'
import utilStyles from '@src/styles/utils.module.css'
import Image from 'next/image'

export const OffpeakCost = () => (
  <div className={`${layoutStyles.semaphoreContainer} ${layoutStyles.greenSemaphore}`}>
    <Image
      priority
      src="/images/face_thinking_person_woman.png"
      className={utilStyles.borderCircle}
      height={128}
      width={108}
      alt={'ilustración de una moneda'}
    />

    <h1 className={utilStyles.heading2Xl}>¡Poco!</h1>
    <h2 className={utilStyles.headingXl}>Hora valle</h2>
  </div>
)
