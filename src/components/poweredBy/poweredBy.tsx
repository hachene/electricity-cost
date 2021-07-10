import splitbee from '@splitbee/web'
import layoutStyles from '../../styles/layout.module.css'

export const PoweredBy = () => {
  const handleClick = () => splitbee.track('open twitter')
  const twitterLink = (
    <a
      target="_blank"
      className={`${layoutStyles.customUnderline}`}
      href="https://twitter.com/huan_mp"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      @huan_mp
    </a>
  )

  return <p>Tecnología punta diseñada por {twitterLink} ❤️</p>
}
