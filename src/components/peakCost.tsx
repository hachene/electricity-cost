import layoutStyles from '@src/styles/layout.module.css'
import utilStyles from '@src/styles/utils.module.css'
import Image from 'next/image'

export const PeakCost = () => (
  <div className={layoutStyles.semaphoreContainer}>
    <Image
      priority
      src="/images/face_angry_person_man.png"
      className={utilStyles.borderCircle}
      height={110}
      width={128}
      alt={'ilustración de una moneda'}
    />

    <h1 className={utilStyles.heading2Xl}>¡Mucho!</h1>
    <h2 className={utilStyles.headingXl}>Hora punta</h2>
  </div>
)
