import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export const OffpeakCost = () => (
  <div id="off-cost-div" style={{ background: 'green' }}>
    <Image
      priority
      src="/images/face_happy_yellow.png"
      className={utilStyles.borderCircle}
      height={125}
      width={128}
      alt={'ilustración de la cara de una persona feliz'}
    />

    <h1 className={utilStyles.heading2Xl}>¡Poco!</h1>
    <h2 className={utilStyles.headingXl}>Hora valle</h2>
  </div>
)
