import React, { useEffect, useState } from "react";

function Album() {

    const [loading, setLoading] = useState(false)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbums(data)
                setLoading(false)
            })

    }, [])

    return (
        <>
            <h1>Álbuns</h1>
            {
                loading === true ? 'Carregando...' : ''
            }

            {
                albums.map(album => {
                    return(
                        <div>
                            <span>{album.title} - id: {album.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Album