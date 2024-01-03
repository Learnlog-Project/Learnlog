import axios, { AxiosRequestConfig } from 'axios'




let data = JSON.stringify({
    "message": "chore: Test create file from API",
    "committer": {
        "name": "Arthur Henrique",
        "email": "Arthur.Henrique.Della.Fraga@gmail.com"
    },
    "content": "LS0tDQpfaWQ6IDAwMDAwMDANCmxpbms6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vdXNlcnMvMjk4OTI4OS9hcnR1LWhucnENCnRpdGxlOiBVc2VyIGFydHUtaG5ycSAtIFN0YWNrIE92ZXJmbG93DQpleGNlcnB0OiB8LQ0Kbm90ZToNCnVzZXI6IGFydHUtaG5ycQ0KY292ZXI6DQp0YWdzOg0KaW1wb3J0YW50OiBmYWxzZQ0KY3JlYXRlZF9hdDogJzIwMjMtMTItMjZUMTg6NTQ6NTkuMzY5WicNCnVwZGF0ZWRfYXQ6ICcyMDIzLTEyLTI2VDE4OjU0OjU5LjM2OVonDQpoaWdobGlnaHRzOg0KLSB0ZXh0OiBIaWdobGlnaGVkIHRleHQNCiAgbm90ZTogDQogIGNyZWF0ZWRfYXQ6IDIwMjQtMDEtMDFUMDA6MDA6MDAuMDAwWg0KICB1cGRhdGVkX2F0OiAyMDI0LTAxLTAxVDAwOjAwOjAwLjAwMFoNCiAgX2lkOiA2NThiMjE4MzA2MWYzYjQ5N2Q3MTE0MmUNCmRvbWFpbjogc3RhY2tvdmVyZmxvdy5jb20NCi0tLQ=="
});

let config = {
    method: 'put',
    url: 'https://api.github.com/repos/artu-hnrq/learnlog/contents/content/__test__.md',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
    },
    data: data
};

async function makeRequest(config: AxiosRequestConfig) {
    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.log(error);
    }
}

makeRequest(config);
