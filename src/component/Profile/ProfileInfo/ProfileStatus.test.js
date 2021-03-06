import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Kurli" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Kurli");
  });

  test("after creation span with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="Kurli" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after double click span should be open input with corrected status", () => {
    const component = create(<ProfileStatus status="Kurli" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick()
    const input = root.findByType("input");
    expect(input.props.value).toBe("Kurli");
  });

  test("after creation input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Kurli" />);
    const root = component.root;

    expect(()=>{
      let input = root.findByType("input");
    }).toThrow();
  });
});
