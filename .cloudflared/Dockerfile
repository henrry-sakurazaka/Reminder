FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://github.com/cloudflare/cloudflared/releases/download/2025.1.0/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared && chmod +x /usr/local/bin/cloudflared

RUN mkdir -p /home/nonroot/.cloudflared

RUN useradd -m -u 1000 -s /bin/sh nonroot

COPY .cloudflared/entrypoint.sh /home/nonroot/.cloudflared/entrypoint.sh
COPY .cloudflared/config.yml /home/nonroot/.cloudflared/config.yml
COPY .cloudflared/cert.pem /home/nonroot/.cloudflared/cert.pem
COPY .cloudflared/offsetcodecraft.site.json /home/nonroot/.cloudflared/offsetcodecraft.site.json

RUN chmod 755 /home/nonroot/.cloudflared/entrypoint.sh && chmod 644 /home/nonroot/.cloudflared/config.yml && chmod 644 /home/nonroot/.cloudflared/cert.pem && chmod 644 /home/nonroot/.cloudflared/offsetcodecraft.site.json && chown -R nonroot:nonroot /home/nonroot/.cloudflared

USER nonroot

ENTRYPOINT ["/bin/sh", "/home/nonroot/.cloudflared/entrypoint.sh"]