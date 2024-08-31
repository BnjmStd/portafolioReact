import './toggleDarkMode.css'

export default function ToggleDarkMode() {
    return (
        <span className='container__toggle'>
            <input type="checkbox" id='darkmode-toggle' />
            <label htmlFor="darkmode-toggle"></label>
        </span>
    )
}
