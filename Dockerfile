FROM python:3-alpine3.15
WORKDIR /app
COPY . /app  
# move all the files into working directory
RUN pip install -r requirements.txt

EXPOSE 3000
CMD python ./index.py
