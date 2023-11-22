def style_prompt(style_type):
    # {0 : 풍경, 1 : 그림, 3: 만화}
    if style_type == "0":
        style = 'by landscape painting style'
    elif style_type == "1":
        style = 'by illustration style'
    elif style_type == "2":
        style = 'by Cartoon-style illustration'
    return style
