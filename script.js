window.onload = function pageReload() {
    const reload = document.getElementById("root");
    reload.innerHTML = `
    
            <header class="headerdif">
                <nav class="resoluçao">
                    <ul>
                        <li>
                            <img
                                src="https://bn02pap001files.storage.live.com/y4mng4jM0O2smLSdvIkCia4tUwmhHH-C3nvBR4cvBcIr1eHwyufQulEParAYfdpeVSOvJgNtsnnA8kKKVqH8jn2xEQm1CYbGq5wLT0PO-YcXbUs9NvuwVXjYA8FrXcT_GhO8B9hi0nqxwndhKIvZmVZ9Q9Rrud9HZoNknwWucAVRtAorRiKzxLz-mIc8_idnktM?width=177&height=250&cropmode=none"
                            />
                        </li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
    
                <img
                    class="banner-img"
                    src="https://bn02pap001files.storage.live.com/y4mYDO5WHStGzWAhSv7zlpCMeU8EI2zqsQRwQxhXH8X4ppGp5wfnqTWyRwsUR8e9DKRie6Nbz94_bbY48p9vXXMWQi7TjxkCRverrRIFxaMw4ELkKrsUi2MDELwi8ovYe60prw19DsSYl71WjRlV7CF1At723_A-t7pCwwVZLD25YqOee8qjuB4M9l9BkQEg54W?width=800&height=300&cropmode=none"
                    width="800"
                    height="300"
                />
            </header>
    
            <main>
                <div class="grey">
                    <div class="resoluçaofinal">
                        <h1 id="sobre" class="negrito">Sobre a barbearia Rotta</h1>
                        <p class="normal2">
                            Localizada no coração da cidade, a Barbearia Rotta traz
                            para o mercado o que há de melhor para o seu cabelo e
                            barba. Fundada em 2019, a Barbearia Rotta já é destaque
                            na cidade e conquista novos clientes a cada dia.
                        </p>
                        <br />
                        <br />
                        <p class="normal2">Nossa missão é:</p>
                        <p class="negrito2">
                            "Proporcionar auto-estima e qualidade de vida aos
                            clientes".
                        </p>
                        <p class="normal">
                            Oferecemos profissionais experientes e antenados às
                            mudanças no mundo da moda. O atendimento possui padrão
                            de excelência e agilidade, garantindo qualidade e
                            satisfação dos nossos clientes.
                        </p>
                    </div>
                </div>
    
                <div class="maps">
                    <h1 class="titulo">Nosso Estabelecimento</h1>
                    <h3 class="normal2">
                        Ele está localizado no coração da cidade
                    </h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22959.48583540406!2d11.219057007479133!3d44.002054513078505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ae4b3be8190df%3A0xb6f82085b4161f64!2s50031%20Barberino%20di%20Mugello%20Floren%C3%A7a%2C%20It%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1637706916755!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
    
                <section class="mainBarbearia">
                    <ul id="produtos" class="produtos">
                        <li class="listamBarbearia" onclick="selectType(this)">
                            <h2 class="preço">Cabelo</h2>
                            <img
                                class="imagem"
                                src="https://bn02pap001files.storage.live.com/y4mP1DnNvjvTI1dwJ0XQ6jNYUeAKXp6xNyArzPi5jeM8gN2HLsIW21zOmLs8n7PiTru2mXT7WTs9H800CXeqJRgufxvM3ArxH4UNhcS-USDxwvbiVTJaxSiVPwrrMVCzmCEgP2GsAI8r7wiF6utG8gD3eKotnWLxcAgrx7wpNZtqAy3k9do1tkhB0qNe_iuQ8GJ?width=250&height=250&cropmode=none"
                            />
                            <p class="texto">
                                Na tesoura ou máquina, como o cliente preferir
                            </p>
                            <h2 class="preço">RS 25,00</h2>
                        </li>
                        <li class="listamBarbearia" onclick="selectType(this)">
                            <h2 class="preço">Barba</h2>
                            <img
                                class="imagem"
                                src="https://bn02pap001files.storage.live.com/y4mQk-x8sTWqztAkfzFixIiBJec9uUYsy2JB-1XJVANUwXvV9jIgB24VOGd1-eTLtnJcrBD0RpDBCriAmvgTQlfnWGcvbfs4eOaHGS-2PLp6Bd7sVUAHNe7xlg2t2TZjLjSwXZ5k7fwkHcg40sFjvX9MAyV0mJ37e5txUrqlPF8uLc9qCeJUnMwkw4I2d60w7HD?width=250&height=250&cropmode=none"
                            />
                            <p class="texto">
                                Corte e desenho profissional de barba
                            </p>
                            <h2 class="preço">RS 15,00</h2>
                        </li>
                        <li class="listamBarbearia" onclick="selectType(this)">
                            <h2 class="preço">Cabelo + Barba</h2>
                            <img
                                class="imagem"
                                src="https://bn02pap001files.storage.live.com/y4mgaaU4wq3IwBWV-v-Vunugf9t8MCLVdmFtTCgLoF1jXeIqFX93wpzSkl1WDhimZW9PyfNJc4DzSX3mpUBeqsWQ8zAFWJyEFj_6G5Czb8pfSwwFKr3yR9ODkS_RLzckGgbamZGWmfUiaOlD9rUZibKm-UxOSvWPa3Brc2t-ehLsu0uq0FJ_l8GT821l3Sg6skg?width=250&height=250&cropmode=none"
                            />
                            <p class="texto">
                                Corte e desenho profissional de barba
                            </p>
                            <h2 class="preço">RS 35,00</h2>
                        </li>
                    </ul>
                </section>
    
                <section class="resoluçao">
                    <h1 id="contato" class="negrito">
                        Solicite atendimento personalizado em sua residencia
                    </h1>
                    <form class="forms">
                        <label class="inputforms" for="username"
                            >Nome Completo</label
                        >
                        <input
                            class="outputforms"
                            type="text"
                            id="username"
                            minlength="3"
                            placeholder=""
                            required
                        />
    
                        <label class="inputforms" for="email">Email</label>
                        <input
                            class="outputforms"
                            type="email"
                            id="email"
                            minlength="7"
                            placeholder="exemplo@exemplo.com"
                            required
                        />
    
                        <label class="inputforms" for="telefone">Telefone</label>
                        <input
                            class="outputforms"
                            type="telefone"
                            id="telefone"
                            maxlength="15"
                            placeholder="(11) 91111-1111"
                            pattern="\([0-9]{2}\) (?:9[0-9]{1})[0-9]{3}-[0-9]{4}"
                            title="Número inválido, necessário adicionar 9"
                            required
                        />
    
                        <div>
                            <h1 class="negrito2">Horários Disponíveis</h1>
                            <label class="inputforms2" for="hour1">13hrs</label>
                            <input
                                type="radio"
                                id="hour1"
                                name="agendamento"
                                required
                            />
                            <br />
                            <label class="inputforms2" for="hour2">15hrs</label>
                            <input type="radio" id="hour2" name="agendamento" />
                            <br />
                            <label class="inputforms2" for="hour3">17hrs</label>
                            <input type="radio" id="hour3" name="agendamento" />
                            <br />
                            <br />
                        </div>
    
                        <label class="inputforms" for="message">Observações</label>
                        <textarea
                            class="outputforms2"
                            placeholder="Qualquer informação é bem vinda"
                            cols="20"
                            rows="7"
                            id="message"
                        ></textarea>
    
                        <label class="inputforms" for="cep">CEP</label>
                        <input
                            class="outputforms"
                            type="text"
                            id="cep"
                            maxlength="9"
                            placeholder="00000-000"
                            required
                        />
                        <label class="inputforms rua" for="rua">Rua</label>
                        <label
                            class="inputforms numero"
                            style="margin-left: 10px"
                            for="numero"
                            >Numero</label
                        >
                        <br />
                        <input
                            disabled
                            class="outputforms rua"
                            type="text"
                            id="rua"
                            maxlength="9"
                            placeholder=""
                            required
                        />
                        <input
                            disabled
                            class="outputforms numero"
                            type="number"
                            id="numero"
                            maxlength="9"
                            placeholder=""
                            required
                        />
    
                        <label class="inputforms" for="news"
                            >Gostaria de receber as novidades?</label
                        >
                        <p class="inline">Sim</p>
                        <input id="news" type="checkbox" />
                        <input
                            class="enviar"
                            type="submit"
                            onclick="submitForms()"
                        />
                    </form>
                </section>
            </main>
            <footer class="footerBarbearia">
                <ul>
                    <li class="listafBarbearia">
                        <p class="listafBarbeariap">&copy; Barbearia do Rotta</p>
                    </li>
                    <li class="listafBarbearia">
                        <p class="listafBarbeariap">Estilo Italiano</p>
                    </li>
                    <li class="listafBarbearia">
                        <img
                            src="https://bn02pap001files.storage.live.com/y4mqpSm6A1vtm7wsvrLKNDc5nRmMjbFu7ZCRePO7YwsYnp-4grDXwVeMDC1xuSl11buinu6HxsoO7Y2c3uT69aYB1qOuqJb-towfWQJaep0s5Pjwc0MPSkamfcUsOMDLQisHA1n68BWXu3J6hrTjvE6VUDjqVEI-_HsOswem_j2liduPTB3YJHPdWxwNKy1Pbfp?width=177&height=250&cropmode=none"
                        />
                    </li>
                    <div class="img-footer"></div>
                </ul>
            </footer>`;
};
