export const seeds = {
  matchTypes: [
    { key: "regular", name: "レギュラーマッチ" },
    { key: "bankara_challenge", name: "バンカラマッチ(チャレンジ)" },
    { key: "bankara_open", name: "バンカラマッチ(オープン)" },
    { key: "x", name: "Xマッチ" },
    { key: "event", name: "イベントマッチ" },
    { key: "fest_open", name: "フェスマッチ(オープン)" },
    { key: "fest_challenge", name: "フェスマッチ(チャレンジ)" },
  ],
  rules: [
    { key: "TURF_WAR", name: "ナワバリ" },
    { key: "AREA", name: "エリア" },
    { key: "LOFT", name: "ヤグラ" },
    { key: "GOAL", name: "ホコ" },
    { key: "CLAM", name: "アサリ" },
  ],
  stages: [
    {
      name: "ユノハナ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/35f9ca08ccc2bf759774ab2cb886567c117b9287875ca92fb590c1294ddcdc1e_1.png?Expires=1768003200&Signature=pG~96u3bh31bFqv54QgKhL~mOac4HhXjrFM~FzsRZ-oICnGuA4zoSxkeubKpMlB~Y5P67t69ee1awax-Ie8fMbTgv3edVObZZeVFkuqsiE3MlXMnx76BClLtVHBkqdPS3Z9Renqzkf1YpiNZQ2BMxyR2aE0Z5S9q9Eq0EJt1IEhf9wzoeaTBRS2gwl3JYIBZ23Jru7~tTxNzSqqrqO18YEJtLwEYn2SdVvn-HbyzMVsIBSBxHGKbtPQrCGnCu5o939nfycJYAUnQ2K7tmKzd4eZBANbGob4enZwuZT5B2laeOnBSt9D8JitL5qJ-jkSq8NNSvI2FNlhcK-w2Ef0KyQ__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ゴンズイ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/898e1ae6c737a9d44552c7c81f9b710676492681525c514eadc68a6780aa52af_1.png?Expires=1768003200&Signature=rkFiH4L3QkVk1pkJT4SCM07ziR0gxxVaKNEK6AnemuzO7Y~~CcJZAL4xMQFK1VFMMYG2WMtIHJ7WqfH7xeL3H-~XYhgKfQrZX8Be46S8TktohEnXfRh72jF6gWpP9uxI2YdaCxq7niPeeKv7IxoTK94USvf0IXqDbiYJrAaDc4T~aJ06wZF8dLIyoei9TF1UBKzJxSysz~5oa9Cvfb9Xy617AA9TgS~HbMAk1x5aWRgTnDvZcLtFWuhJziT~T2vc6CRAboSMA07aZ6Z2S-q8ep4n20TDz5dkr7cKUIyEWVrS3AMecFu6G10l9mfjcHJsLSJ1lANRVJxguzxVrNwJfA__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ヤガラ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/8dc2f16d39c630bab40cead5b2485ca3559e829d0d3de0c2232c7a62fefb5fa9_1.png?Expires=1768003200&Signature=p12pTJ1BncNXo6J98CA47U6A31n3PpDNiutDSDOhtIZZDHWgWdr9ZrnuWlrDfdtb30bd6dZvdixkP8iNVgTpP5tgjxQ-QdfqRMT-dhQwsuWW5h1reYKfki9j1hN4YXwp3UDhubq6DJHRfMe92rvSh-hJehpXha~m6m7g9dT7TOj-1UOWrCxATj~w4n0giBA~Eqh9yP9iZdp3TbhsIcf0WPQIfd0k6cd36EMArVbHJWK0bCt-AJmN~~IiwwHM5~yBEZa5WRNHXSXQeFaPb6RULUcabMykIDtOY1EiqAQHkTOyGfIRHTXoKbr8Sjj3Yu62m8~eso75mnI8mZlbpLMNMQ__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "マテガイ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/9b1c17b2075479d0397d2fb96efbc6fa3a28900712920e5fe1e9dfc59c6abc5c_1.png?Expires=1768003200&Signature=moRd~zasKmSuBTDpTPEtj~T9ux7PSWyfafEsiS3JP9Qqr6tdnhOWW3NsByLpRYFeVGabZ5SfamCSaMdRO2KdymIH6V35RawKf6x~R3A4nXRB8RWeK4FhyYnYEXALOr5LGitmV2FY1EgNDsqNRxmkOhu~znaOr7kPcfoUTP5FvNftYK9mtD-XRIv4bknd-3YTau4KVFc9ctcxU6ktVI-Kk14-nvNIyuXsuYf-HiNigAFGZ1EHgwReMozlWOSv15PcGauLMyhN8ZJTB82UQ08bKBmm7qBXAgkpisOh4plNjhHiWClifXstdi0AsAq1RkwJk4MRT13ToNwLZXtBWWrH2g__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ナンプラー",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/f14c2a64e49d243679fc0884af91e1a07dc65600f9b90aefe92d7790dcffb191_1.png?Expires=1768003200&Signature=EcaMKmATURVK0IZ7dn0jzo~MXQfeA8SmEmqMV8jtDUNSppJj1v6SCMzJZDs4LlwMGu2FEbMv~~i-znNXy1LL-j8Qkwcqkxm44doB9JKDtGTaFRPlufTdQ2CD1xxDDPx37evvbe5D~CGcmQpEOk7cog9fLXepDXx~3Q1uU-U9m0Xei75g13t2wx-~fNNx095J8pFJwSevIBIpJZ~UyxHbhEbM2H8PK4L~z1J7i5f8B~o4MN16~t3t230znMlVpdYV08xLzQU8YdYSKtRGWzeyYDKrMNQMZLC7WmRLx8CujvgnHSUvoI2nArnp~xT5qk1dynFuapoB0ZDzRlFj69efGg__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ナメロウ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/de1f212e9ff0648f36cd3b8e0917ef36b3bd51445159297dcb948f34a09f2f05_1.png?Expires=1768003200&Signature=whJMQNnAkxoMRNwIt1oVan03D4WQcV~D2PH2f1nL6X9jqpVN1yPzWqzm3Fkg6wH~cugBsOmeSkeew3u4btXphh9uN8kEcKIcSw1QjR6dHN4bv0dTRxrIkoP3x261T9v5e70OriJ~vbpPqEIF4-TSYTt24yhkR2l2gE3IgUhueH2pUfvj9r5tNKAoXXtUQNccAl1OP-onB64HMM1NgqVYs93gA9-tWui0VE6rM0qGi9BjgobVlVkdRRMONz2xnKyQwd8vqegsp6JUFVlV6YlxyYO5eMKY7pFXu8XOhheMjzkjdPl~Dnhu13rGOIIIobMhd~vLk~ixIKfWlTXtXMJNrg__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "クサヤ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/cd84d711b47a424334569ac20f33f8e0ab6a652dc07854dcd36508a0081e9034_1.png?Expires=1768003200&Signature=qtzsVPsRkcxKzyVs~Sc79HS~1xWGU7LAhesAu5XHb7O4KIBBJwJ8m3~ORxWGmLGCDaWEpjFXu6YtdgoIHvyucEO9Z50ADeF7Mgic64MFHisGaEGvEBiGzFaLaR9XLa8JB9Ol89LXfdpRoIvh3pWW~TL95bq1hiZcMDGg-pttDniFhTvBUttwxZcCkoj5xiQDEcoWT-Fc-hretFUporUEzI41L4Cpw0K8fYgPwNB25bWNy-dlPqNE0e8jqlSuSZjMZ0K~xcrCrIuXJQOOkbPdoHbss9qnulC37kPtfRV9yClXHT7ltrYgMElh4R56qQv4BQuxvC7PQlw5dtWdL2N4iw__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "タラポ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/f70e9f5af477a39ccfab631bfb81c9e2cedb4cd0947fe260847c214a6d23695f_1.png?Expires=1768003200&Signature=NKk4TgEl-DjRVytcxnG4CM4axTCzLIGs3tiHERDSPN-P5yPVlrw89wNnL7e6JJ-sVjxlLqkoRhHiuiVnTH8v2t0LXxVVi8eH6LwRUin8--KDtHFEnfMJ~OPFx2MXe85qHQqsAtPTm1Eo0lYgnxqxclycuEvgEtToADuW6VzQyW5MXyml-IvDu6b1sEAxpacoRlLu5SPICdJa7xlfh~uWq6wYPc0hd2QsJpLBMdPSUO3tHB-yIigZZXvxD4Ka6fzis9ViKR-rnaqmh9JFC1YmxgVSq0s1OOpTrXWy3IoH0qQoJJ99zgOZGVM4ox2SRtgLhrNbygqX4Pis2q6hPOH2Yw__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ヒラメ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/488017f3ce712fca9fb37d61fe306343054449bb2d2bb1751d95f54a98564cae_1.png?Expires=1768003200&Signature=u3RugplKMLp4TB5gcIkuF~ukVlY0K3yEddl1qwSGivZCFrr5qQcG9ZgLedy1pNLt0vOKKVXSEFL1eYIx9KzsJvvAamq-KmLu9LiSKYbFFc~a7MAw6ARMyTyCZi46Qftgs~p4nkD1iCzf30QPp1r05kzhikrAbWRjblWPGn69Ao0lEaJZV2y4peiZyh0Lsl7MPSk7tJg6QY09VTe9heJv3-Ro4qBva88tuqR35eATcdMxQjnaLqWOpewGNNtJoXnon15PenVTD6QjAZ7CMN8zmBLNZdx2OeioAUEy1~MdtSWiLyAFewgGg-41-3dHyTLV9QnOtJ7UZEbH0LY2Ts5g-w__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "マサバ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/1db8ab338b64b464df50e7f9e270e59423ff8caac6f09679a24f1b7acf3a82f3_1.png?Expires=1768003200&Signature=jeWzkmTf~jZqKCbgt3qpycDaPaL8UNJ1VKcaOSmIJ~wIb~Nl7v4NtUiQrJNTfxL8htOwkGN5fVKNLoamp~MjadbmN-JrFsZlx7ihPxIhJ1etvJv4ihz3dK~ryW6YrBLw-kWWc79j8SICKPCldM30vGlSfq19w8vwrwZvKLue1dmk6LzHNmXTc1xK4rO0oe-ZTCWvgyVMOPd0fBVB8BhtbV538zaHzUMbGAMMNULxkSaGe-vP5zlcR2aQcNDqSmMi0nukctQXbGpIBt2UY070kBlmZAZyrG1065osD2DfE9y-kTfewKI3wrdDuzCXnc4u9Fo4e2tjqUQl0t1zQFJpkA__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "キンメ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/b9d8cfa186d197a27e075600a107c99d9e21646d116730f0843e0fff0aaba7dd_1.png?Expires=1768003200&Signature=Y3AUiqmxs7yxSU4Xce8WeJDiGLWl6Ds1alMOS008P5SO2hk8eQwE~P97CoMBAGIPcqmUD2CFRsg4SocblA0t-Kf6ng8rcXsvR9V8XB~~nqT-29r2zCgqxJym24tCPHDDAzmXGRdUWKV~86mDHw7H8C~HL47i7-SNUurUDDBqORw70E9H8gVdscLNjrMoGjHkH0XcGbCGzLNq8Fm4cMabtcNX~2JW0gkH4tCI-HMFzz8WRwQen7rY7k-tof1SUimKRusfvSoUe8NRgE5VFG4gW6PMaIiZ-eE0vTxwOBNusGgE6a7HDTq6JHOfUtep4XaxPEW0UTbJq460CAJiflVSqA__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "マヒマヒ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/8273118c1ffe1bf6fe031c7d8c9795dab52632c9b76e8e9f01f644ac5ae0ccc0_1.png?Expires=1768003200&Signature=klHmTjDb48MQcqI9xtK5KNutOJXd5~1qVSU1XEK6U0H95g1bTqrtDsCtFFX-pVKOk~uQuf-PvoUtnFnXIe02qmBM0KSQmQNuKxMFzzuGNDSmMjnqXqPtTIxIlYoeLoRqCCBUsmfKItxgXnBLhs~HTUnGI57xwqkMNGcw8APRtf0mM1tboWehUm3kycf10p7qXySt~YDEWfzsa2l2apfcA0R4YmxsHlC0Q5awmDEJx97nsrheWydGjc7H498Z4dVLyGvS1N1GqMNM1tlxHXj0aB-i5L4CI~lNM1h1eRfRtauQZV6pFR~YXmsjdrSd9T1Xnq9u68q9zrwB562svYGYCw__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "海女美",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/40aba8b36a9439e2d670fde5b3478819ea8a94f9e503b9d783248a5716786f35_1.png?Expires=1768003200&Signature=T5n3A7bE2i8WHuRlGb1TtpDsignSVn9U~PQ2xwwEbKmZddipO4deLSx~OXwpQUSVZhQGmeg11bBfgVe7li52m3iWfWYa1qevabTBrJLMC2ST5zvO9AaCs4BQuFzjr7cK4H3BFc7e6YSn0jy3Q4poZ~9Pcl6ovEYclvd3cSnCcZKEaFSid49snhd2kMaBDdL15w7gI4iprhFsu8LJIqT1OnthZ4vvdhAagGfrMA33m84azqWWOLUbIbgPyokuTBSDZRr-JMlXSAilq2O3CB0a1Lut7SoQKbKtvN9jM46E1N5HAMzLx1KChSwm1e89U190dsRoUfAGtdqpsm7xKOvdcw__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "チョウザメ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/48684c69d5c5a4ffaf16b712a4895545a8d01196115d514fc878ce99863bb3e9_1.png?Expires=1768003200&Signature=W6uG29iDCDelRy8eddmxW9ZFGockDUGibspr4~ZKtFvB-aGeu1MfO1jURkffaACDYpyVqhDPq-4krnU9rzKbXXj~gGEIMhnY8R0dK9LHR2jiEJcSVuTcZZLBMu3qNjfQ5M-joYOsmSw3lP2CWBWowRLIGXbjXNwX8JCJoY3uOTuzIZuTlqZ6JplZ6hOycxF~Xm5fmUlAHQ9~RZy5U535GGxf6dsI7CftX7Yc9iU3nfpxmnFvp6G~R9-vbShpt13y019DsiUwa6ggcpDywt~K7tTbBI1h-cOZzJVtEZBGoOhnZjBD24o4gVd4xG8Viqebh-oRONtF1nbo32c~ney7RQ__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ザトウ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/a8ba96c3dbd015b7bc6ea4fa067245c4e9aee62b6696cb41e02d35139dd21fe7_1.png?Expires=1768003200&Signature=qGFPi4yxxnFWRu2kDzK9dPbT2duPZ753MhjVH7FS8gUD~jP1WvButzdzhvJP18yOzCURvyTc1tYLkUFEuZqPRPzjjjCebx0O1MOao778iZpelfZ-XMdVPYwk~VcfXtg2rhmJ2aorLMVt0fpk7xjfrW-7mSNirPPDduzW03D~lVks0p3CFIZuxWN5FFQo9cPAA3fO4Fnwg5gDTJUAy4Kq269sPt-j5uLLSKuoox-6IiWrn7dErnf2XuVynPLFIUA~DXvvG8VWRLn9XLjLdGjdC2hKN6-5f4M0Bufrd~OEGyGHkd1u5~w9HgSlNnTUg93YAQZ2kTI5eul5v3zyROt1nA__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "スメーシー",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/61ea801fa4ed32360dcaf83986222ded46a72dbf56194acc6d0cf4659a92ba85_1.png?Expires=1768003200&Signature=IdmSFiISOlWl5qynL7ceZDfpMYPGt~59LpiPrHbijtzOrZnO8SRGI1WMFOsF3FPYiY0F0X4-j~AaHoTm7aslsAdm9UJuTcRpTJsxxey1tLe7pQAfIkoJ2tj4OUMXwJpq-Zs8fQgnihE5lv4-5g8yiVPqWTxgDrcq0IrslbKFkZxTZ4u-vieOALJC1OoxkqGGAB0qZjA2olj6v-SamfLSIXll2fHfrU~hO319P0ZEEeL5v8mWicT-h90BZSl7RCFXVDXB64ZSftG4uU9XpksxpfJopxd3GmwYdpCGad4cqd2PhRbJ-Xn9xR2~HWa0wPlfBdqFdEMJS838~2xFLxIJ-Q__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "コンブ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/7b3cf118bd9f45d141cd6db0ee75b06e697fa83945c7fe1e6f8483de6a591f5f_1.png?Expires=1768003200&Signature=BtsCI6LiNyhEBe2Po0m18EzfRBbxCp~Y3CBUduoqV~s7LQFZuLJFWScVYHjVcyMfvIchfGDiZZul4wy5wZmmA8Fakp6ehT0wJTsLXVec6IGlqBXnlfj4XBVeebNDwGNNMGn~sH8hCYio8CXMIJdAKGpeuPnZtdfnwGlqe7WsBspFb~Jlw0B0qvrtmeSoAagv2mGo14GxUUHPYg5K2XUnJR1kVQR26jo8Xq3Y5URI1lSKHQLs14W8aMn0OgJkE4wuKtP0Q5auultkcoEC4ifP7yqmipCFzPSB3xVz3TJ0ErHbK6QrPnF0damLFX-WfofRzmmzTw70C6ee~rL2AwW62g__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "マンタ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/0b7fd997781e03eb9d5bf1875ed070f698afc654f4fe929452c65aa26c0a35fd_1.png?Expires=1768003200&Signature=e3jVVIggGySQjky-94i59G1uFKVyKgz9s-vrk1t67q8cQnRIDO6Qq-BPBUE6oVK3tgO1F4qH7PtO-M~0e907rbBz0Ganoit8XilH90RdMtFtIIuR6lNrfUu8JF8Ucqkd01OHChIBg~nQ3ZshzYTPkTRt-KBmqaFvh371R~uStBBdncuupOA9ZwfnmpBeaVVKKHOnzfTh2wXk0CfYyw3~EDjLlLhPYUd-D3IClrKFG5nrS-HehUO0g4rH8Kq9ZgbPuBt-PZDYpipWE3rrPomw8INuf4LAAyGEHuVdRaA2CnOsOoeSBuZoE0EyTiq35B9l5vt-Re6JBXu90rw4JkV64g__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "タカアシ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/4e0e9e2046aff1d635e23946d9f0a461486d2aab349079e551037e426ac82c7a_1.png?Expires=1768003200&Signature=upy8v8J~M0E8YXUsnUE7P5uiMubp1BTPmzFnFz5YNW5~OadAyey0q1iG1sdBYwehW8wAdg043RIGNo9Ll9dkSxSADLUz1~E9cN1fpHJWIeTzXF0RKwuoW3HSj3XWZYvRXmSaBc74JoifBMzwIHPEGyq3hWoXt0-xcaHmUYOhA99MhAwWjS95X0CNr9y-IHbmEn~NB5HKKVFNIvqqAzHcUKL4BD-23dKqmKWdf00cydd9FpWigq9JPlvcGiCdrWbafRsefw0YeyPGP5iLNjqFdQFO2dR~qt9FJd8jNNv6n3-dcm21Y-8I~qnXYaYwULQzZkXo2c2iPUlUcdgRUerbMg__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "オヒョウ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/b65a70eedf129848b9d2b492bb68712abf91a5cbda13131848947fb04c51d665_1.png?Expires=1768003200&Signature=LAVI3p9NiCKrVDc2qU9je7h7Dncxgtq9EOjLHNCrDJYV7cM7q-paBf8EVnJCM9hh-UIsofFmjNM6p29dV00mCsVQTwWMPM1ySeqOXkjnlL5PwXJFdEoHIkDdp0NKLk5yo-13Q2tEznApEt6jmT45kmXuwB7hEjUIip0nmVFuKUtuJwM3ec0GU-cXaINZUj46kmdxUsK8VJAVqrNqHdcUUsoHH68J6xB24XqfcpoucKqNk6y2LTd6smkfX0JqMOg16OjFxa6fAsUsO~BVpVU3l4QIRvvHLIotK0hwlHGORt3sIHDsv92UVLSuFrIgjB8vN3PfUvjPbfLlsAXKN0m4rQ__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "バイガイ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/692365fa7e56cf19cfa403a8546e69cf60fd9ca2171bde66cdaa53dc0e736ac9_1.png?Expires=1768003200&Signature=R7M9KBZVF5BkfMXZLzJriJvekEM6IwveNwdXzS4YKYVAfjtQwrXHUjHs0r0PVaze~e0kZRm7tE9gdBFZ1r67Ig3DNyvaSTVOePs1J8ZVeJM5gIY7a-IxffHUqIpHrMVrV9PUirbK9OeUlzKU2sIWAEMBAJqp~dGfbm22JjwT2kVtL9PQrYCrex8edC3thYo4vH8PnNTnqscKySaSlqV35VBW-2Koqkcr2tlFggEKa7AzISdNXNMt03R~Q9J4NINMMflBxizSNWRbKCQZbqFgnel3oycmu3COVdUBPtnTblKxsdgO3lMC9DznfFHI7HBYP3XzN9bQAYO-hyE3hhYK4w__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "ネギトロ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/3e468df1f38d6323cc8d9446049696d66e47831e68cd31032502349b11960500_1.png?Expires=1768003200&Signature=N3zeJvxMoUP22e9cWEa9-AsByMIv6Us~bIKAuIY6dydtF7jrMXFKgVQaywOnixKP4wDzfTCbu~anODLFlVsPjw-Hyqjwub-01xcz3EeHWT0zc8HXEPWBvYxJ8VJXfOIMJr5llDNebrTG3GftF~jsHUkGy4X08aO7p5FXWFjVhIFVK8La~OVYstWxsCkmSUbTqeDGNkUk0VHPXpaKH7q~0-bX6gfPpdyC55UrR6BhQ0SbwN4V-MpcJr88hE~qPNPOfgKt0vQrNpOjCC~NU-DYopAkyh8nDxeOq8WjNTS45SaPYmPk7QSrC9c~~8dB5l~txh~KcQ7hvizUtEQCJUhp8A__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "カジキ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/21ea0549b3d29de56ec20affef8866297929d0defb82a27cd199c9d8dade508c_1.png?Expires=1768003200&Signature=ZmvWqFo-NHddAW~NUWu1hf8ePv-3wDoGwv-gC6kVkrKb6Ohyq8udWypjsdUjwgRNPWdvTeHIatDMDc~7uv4lON-q-i1-ixxluhHGTA0Ltl6rAEhBLqtFK4bqbiGu9WxBno~0C3z7SMx5tnnzVk2U526wESzS19wEYPsCkO6jo69TGhJinG-yMrvyPYCCjdo9BmbwZVI9wtZ7NrC8-R1N21MnimqO~39ZXyZkNMIZGlAtNKQsSg~wwFgeBJnUHG134-nf1g8eeXOPQsezgvIIAyUrVJ-dTzIp9vboXgrx8o8vqBtFkOs-AjDQMse3SUHfE1Ehps4jTasqJ0xjEIaFdg__&Key-Pair-Id=KNBS2THMRC385",
    },
    {
      name: "リュウグウ",
      imageUrl:
        "https://api.lp1.av5ja.srv.nintendo.net/resources/prod/v3/stage_img/icon/low_resolution/2ba481293efc554ac217f21b6d56dd08f9d66e72b286f20714abd5ef1520f47a_1.png?Expires=1768003200&Signature=hwUf~L1mokvvolPn9AIsVAR-x2Uc7RpjCNalI773BiV1DdGeG0p42DGgkAbo0XUhLq4074CYACaI~6-2pBgYB0a4SPsdHz3DE7DK9GzJJB0RASSoUHl9dPDuv2ebg6JFu2YVYAfim7hUlfRCC5bJI5eFxLiaAoOafCwoSKYZC7xu6baFauu23In~gekGlJGrBiImV~BU9BTRkvYZUnvB5Ij7QJtR7DLZu2z0MrfNTo68JKK9hoOyGyuN01SZgy8QOeXzcTrnppCTI7Mr2ezcvEoMVOCrCof97OaTMRb8ByrLoVsWCX48cgY57cSIjegcll2FuQs71BooBtaCFt~Cgw__&Key-Pair-Id=KNBS2THMRC385",
    },
  ],
};
