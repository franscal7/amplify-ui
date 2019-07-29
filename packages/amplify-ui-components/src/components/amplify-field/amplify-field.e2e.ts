import { newE2EPage } from '@stencil/core/testing';

describe('amplify-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<amplify-field field-id="id" label="Label test" description="Description test"></amplify-field>`,
    );
    const screenshot = await page.compareScreenshot('Amplify Field', {fullPage: true});
    expect(screenshot).toMatchScreenshot({ allowableMismatchedPixels: 10 });

    const fieldElement = await page.find('amplify-field');
    expect(fieldElement).not.toBeNull();

    const labelElement = await page.find('label');
    expect(labelElement).toEqualText('Label test');
    expect(labelElement).toEqualAttribute('for', 'id');

    const descriptionElement = await page.find('.description');
    expect(descriptionElement).toEqualText('Description test');
  });

  it('fires an onInput event when the contents of the box are changed', async () => {
    const page = await newE2EPage();

    await page.setContent(`<amplify-field></amplify-field>`);

    const func = jest.fn();
    await page.exposeFunction('exposedfunc', func);
    
    await page.$eval('amplify-field', (fieldElement: any) => {
      fieldElement.onInput = this.exposedfunc;
      fieldElement.label = 'adding a label so that the component rerenders';
    });
    await page.waitForChanges();

    const input = await page.find('input');
    await input.press('8');
    expect(func).toBeCalledTimes(1);
    expect(func.mock.calls[0][0].isTrusted).toBe(true);
    const value = await input.getProperty('value');
    expect(value).toBe('8');
  });

  it('can have multiple input types', async () => {
    const page = await newE2EPage();

    await page.setContent(`<amplify-field type='checkbox'></amplify-field>`);
    await page.waitForChanges();

    const input = await page.find('input');
    expect(input).toEqualAttribute('type', 'checkbox');
  });
});
