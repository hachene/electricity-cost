import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export const PeakCost = () => (
  <div className={`${layoutStyles.semaphoreInnerContainer} ${layoutStyles.redSemaphore}`}>
    <Image
      priority
      src="/images/face_angry.png"
      height={128}
      width={125}
      alt={'ilustración de la cara de una persona enfadada'}
    />

    <h1 className={utilStyles.heading2Xl}>¡Mucho!</h1>
    <h2 className={utilStyles.headingXl}>Hora punta</h2>
  </div>
)
