"""Servidor local: /admin e /detalhes?id=1 funcionam, sem apagar a query string."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        mapped = super().translate_path(path)
        if os.path.isdir(mapped):
            index = os.path.join(mapped, "index.html")
            if os.path.isfile(index):
                return index
            return mapped
        name, ext = os.path.splitext(mapped)
        if not ext and os.path.isfile(mapped + ".html"):
            return mapped + ".html"
        return mapped


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8080"))
    httpd = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"UI em http://localhost:{port}/")
    httpd.serve_forever()
