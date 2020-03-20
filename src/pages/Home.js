import React, { Fragment, useRef, useState, useContext } from "react";
import UrlShortenerContext from "../context/urlshortener/urlShortenerContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Home = () => {
    const urlShortenerContext = useContext(UrlShortenerContext);

    const { getShortUrl, shortUrl, fullUrl } = urlShortenerContext;
    const shortUrlRef = useRef(null);

    const [url, setUrl] = useState("");
    const [copied, setCopied] = useState(false);

    const copyCodeToClipboard = e => {
        console.log(shortUrlRef.current.href);
        document.execCommand("copy", false, shortUrlRef.current.href);
        alert("Copied the text: " + shortUrlRef.current.href);
    };

    const onChange = e => {
        setUrl(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        if (url === "") {
            console.log("Need input");
        } else {
            getShortUrl(url);
            setUrl("");
        }
    };

    return (
        <Fragment>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="url"
                        placeholder="Enter Url..."
                        value={url}
                        onChange={onChange}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
            </div>
            <div className="container">
                {shortUrl.length > 0 ? (
                    <div className="row short-url-container">
                        <div className="mr-auto my-auto">{fullUrl}</div>
                        <div className="my-auto">
                            <a
                                href={shortUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={shortUrlRef}
                                style={{ width: "100%", paddingRight: "20px" }}
                            >
                                {shortUrl}
                            </a>
                            {shortUrl.length ? (
                                <CopyToClipboard
                                    text={shortUrl}
                                    onCopy={() => setCopied({ copied: true })}
                                >
                                    <button className="btn btn-light">
                                        Copy
                                    </button>
                                </CopyToClipboard>
                            ) : null}
                        </div>
                    </div>
                ) : null}
            </div>
        </Fragment>
    );
};

export default Home;
