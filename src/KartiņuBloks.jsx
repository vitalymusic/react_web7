import Kartiņa from './Kartiņa';
function KartiņuBloks() {




    return (
        <div className="d-flex gap-2 justify-content-center kartiņas">
            <Kartiņa attēls="https://picsum.photos/id/5/1200/300" nosaukums="Kartiņa1" teksts="Šis ir pirmās kartiņas teksts" ></Kartiņa>
            <Kartiņa attēls="https://picsum.photos/id/18/1200/300" nosaukums="Kartiņa2" teksts="Šis ir otrās kartiņas teksts" ></Kartiņa>
        </div>

    );
}

export default KartiņuBloks;