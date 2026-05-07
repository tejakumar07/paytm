export function AppBar({ fullName, onLogout }) {
  return (
    <div className="flex justify-between items-center m-5 pb-5 shadow-2xs">
      <div>
        <img src="/logo_new.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-6">
        <div className="text-blue-600 font-medium">
          Hello {fullName || "User"}
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Logout
        </button>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
