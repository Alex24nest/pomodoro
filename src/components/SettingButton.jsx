export default function SettingButton({ toggleSettings, showSettings }) {
  return (
    <>
    <button className="setting-button" onClick={toggleSettings}>{showSettings ? 'Back' : 'Settings'}</button>
    </>
  )
}