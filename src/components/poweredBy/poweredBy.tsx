import layoutStyles from '../../styles/layout.module.css'

export const PoweredBy = () => {
  const twitterLink = (
    <a
      target="_blank"
      className={`${layoutStyles.customUnderline}`}
      href="https://twitter.com/huan_mp"
      rel="noopener noreferrer"
    >
      @huan_mp
    </a>
  )

  return <p>Tecnología punta diseñada por {twitterLink} ❤️</p>
}
