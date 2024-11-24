function Home() {
    return (
        <button>
            Home
        </button>
    );
}

function Search() {
    return (
        <button>
            Search
        </button>
    );
}

function NewPost() {
    return (
        <button>
            New Post
        </button>
    );
}

function Notifications() {
    return (
        <button>
            Notifications
        </button>
    );
}

function Scrapbook() {
    return (
        <button>
            Scrapbook
        </button>
    );
}

export default function NavBar() {
    return (
        <div>
            <Home />
            <Search />
            <NewPost />
            <Notifications />
            <Scrapbook />
        </div>
    );
}