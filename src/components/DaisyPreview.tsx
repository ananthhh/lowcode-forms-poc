import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

function DaisyPreviewContent(props: { theme: "dark" | "light" }) {
  return (
    <div
      className="not-prose rounded-box grid gap-3 border border-base-content/5 bg-base-100 px-6 py-4 text-base-content"
      data-theme={props.theme}
    >
      <h1>DaisyUI Preview - {props.theme} theme</h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
        <button className="btn btn-outline">
          <FontAwesomeIcon icon={faCoffee} /> &nbsp; Default
        </button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
        <span className="badge">Default</span>
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-secondary">Secondary</span>
        <span className="badge badge-accent">Accent</span>
        <span className="badge badge-info">Info</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-error">Error</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="md:w-1/2">
            <div className="tabs">
              <button className="tab tab-lifted">Tab</button>
              <button className="tab tab-active tab-lifted">Tab</button>
              <button className="tab tab-lifted">Tab</button>
            </div>
            <div className="flex flex-col">
              <span className="link">I&apos;m a simple link</span>
              <span className="link link-primary">I&apos;m a simple link</span>
              <span className="link link-secondary">
                I&apos;m a simple link
              </span>
              <span className="link link-accent">I&apos;m a simple link</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-1/2">
            <progress max={100} className="progress" value={20}>
              Default
            </progress>
            <progress
              max={100}
              className="progress progress-primary"
              value={25}
            >
              Primary
            </progress>
            <progress
              max={100}
              className="progress progress-secondary"
              value={30}
            >
              Secondary
            </progress>
            <progress max={100} className="progress progress-accent" value={40}>
              Accent
            </progress>
            <progress max={100} className="progress progress-info" value={45}>
              Info
            </progress>
            <progress
              max={100}
              className="progress progress-success"
              value={55}
            >
              Success
            </progress>
            <progress
              max={100}
              className="progress progress-warning"
              value={70}
            >
              Warning
            </progress>
            <progress max={100} className="progress progress-error" value={90}>
              Error
            </progress>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="md:w-1/2">
            <div>
              <input type="checkbox" className="toggle" />
              <input type="checkbox" className="toggle toggle-primary" />
              <input type="checkbox" className="toggle toggle-secondary" />
              <input type="checkbox" className="toggle toggle-accent" />
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <input type="checkbox" className="checkbox checkbox-primary" />
              <input type="checkbox" className="checkbox checkbox-secondary" />
              <input type="checkbox" className="checkbox checkbox-accent" />
            </div>
            <div>
              <input type="radio" name="radio-1" className="radio" />
              <input
                type="radio"
                name="radio-1"
                className="radio radio-primary"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio radio-secondary"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio radio-accent"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <input type="range" min={0} max={100} className="range range-xs" />
            <input
              type="range"
              min={0}
              max={100}
              className="range range-primary range-xs"
            />
            <input
              type="range"
              min={0}
              max={100}
              className="range range-secondary range-xs"
            />
            <input
              type="range"
              min={0}
              max={100}
              className="range range-accent range-xs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col gap-3 md:w-1/2">
            <input
              type="text"
              placeholder="Default"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Primary"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Secondary"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="Accent"
              className="input input-bordered input-accent w-full"
            />
          </div>
          <div className="flex flex-col gap-3 md:w-1/2">
            <input
              type="text"
              placeholder="Info"
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
              placeholder="Success"
              className="input input-bordered input-success w-full"
            />
            <input
              type="text"
              placeholder="Warning"
              className="input input-bordered input-warning w-full"
            />
            <input
              type="text"
              placeholder="Error"
              className="input input-bordered input-error w-full"
            />
          </div>
        </div>
        <div className="navbar rounded-box bg-neutral text-neutral-content">
          <div className="flex-none">
            <button className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <button className="btn btn-ghost text-xl normal-case">
              daisyUI
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-grow flex-col gap-3">
            <div className="text-4xl font-bold">Text Size 1</div>
            <div className="text-3xl font-bold">Text Size 2</div>
            <div className="text-2xl font-bold">Text Size 3</div>
            <div className="text-xl font-bold">Text Size 4</div>
            <div className="text-lg font-bold">Text Size 5</div>
            <div className="text-sm font-bold">Text Size 6</div>
            <div className="text-xs font-bold">Text Size 7</div>
          </div>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Step 1</li>
            <li className="step step-primary">Step 2</li>
            <li className="step">Step 3</li>
            <li className="step">Step 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="alert">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex-shrink-0 stroke-info"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>12 unread messages. Tap to see.</span>
          </div>
        </div>
        <div className="alert alert-info">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex-shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>New software update available.</span>
          </div>
        </div>
        <div className="alert alert-success">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
        <div className="alert alert-warning">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
        </div>
        <div className="alert alert-error">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
function DaisyPreview() {
  return (
    <div className="flex">
      <DaisyPreviewContent theme="light" />
      <DaisyPreviewContent theme="dark" />
    </div>
  )
}
export default DaisyPreview
