FROM significantgravitas/auto-gpt

RUN apt-get install unzip -y
RUN apt-get install sudo -y
RUN curl -fsSL https://deno.land/install.sh | sudo DENO_INSTALL=/usr/local sh

RUN deno info