export const Settings = () => {
    return (
        <div>
          <h1>
            Settings
          </h1>

          <div>
            <label>
              <input type='checkbox'/>
              Email notifications enabled
            </label>
          </div>

          <div>
            <label>
              <input type='checkbox'/>
              Scan devices every 24 hours
            </label>
          </div>
        </div>
    )
}