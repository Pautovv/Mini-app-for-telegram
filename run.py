import asyncio
import logging
from aiogram import Bot, Dispatcher
from aiogram.types import Message
from aiogram.filters import Command
from secret import TOKEN
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

bot = Bot(token=TOKEN)
dp = Dispatcher()

keyboard = InlineKeyboardMarkup(inline_keyboard=[
    [
        InlineKeyboardButton(text='clicker', web_app=WebAppInfo(url=f'https://pautovv.github.io/yyy/'))
    ]
])

@dp.message(Command('start'))
async def cmd_start(message: Message):
    await message.answer(
        'hello, welcome for JaneClicker', reply_markup=keyboard
    )

async def run_bot():
    await dp.start_polling(bot)

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    try:
        asyncio.run(run_bot())
    except KeyboardInterrupt:
        print('exit')