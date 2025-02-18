window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item')
	const tabsContent = document.querySelectorAll('.tab_content')
	const tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabsContent.forEach(tabContent => {
			tabContent.classList.add('hide')
		})
		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(index) {
		tabsContent[index].classList.remove('hide')
		tabsContent[index].classList.add('fade')
		tabs[index].classList.add('tabheader__item_active')
	}
	hideTabContent()
	showTabContent(0)

	tabsParent.addEventListener('click', event => {
		const target = event.target
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (tab === target) {
					hideTabContent()
					showTabContent(index)
				}
			})
		}
	})
})
