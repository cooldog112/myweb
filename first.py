import streamlit as st

st.set_page_config(
    page_title='공동교육과정',
    page_icon='⛪'
)

menu = st.sidebar.selectbox('MENU', ['BMI 지수 계산기', '원의 넓이 계산기','과제3'])

if menu == 'BMI 지수 계산기':
    st.subheader('BMI 지수 계산기')
    #몸무게 / 키의 제곱
    키 = st.number_input('키를 입력하세요.(cm)', step=1)
    체중 = st.number_input('몸무게를 입력하세요.(kg)', step=1)
    btn = st.button('계산하기')
    키 = 키/100
    if btn:
        st.write('당신의 BMI지수는',체중/(키*키), '입니다.')
    #과제1 저체중, 정상, 과체중, 경도비만, 중등도비만

elif menu == '원의 넓이 계산기':
    st.subheader('원의 넓이 계산기')
    #과제2 반지름을 입력하면 원의 넓이를 계산해주는 프로그램

elif menu =='과제3':
    st.subheader('과제3')